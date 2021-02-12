import React, { Component } from 'react'

interface ToggleCaseComponentProps {
  children: string
  initialMode: 'lower' | 'upper'
}

interface ToggleCaseComponentState {
  mode: 'lower' | 'upper'
}

class ToggleCaseComponent extends Component<ToggleCaseComponentProps, any> {
  constructor(props: ToggleCaseComponentProps) {
    super(props)
    this.state = { mode: props.initialMode, load: true }
    // this.toggle = this.toggle.bind(this)
  }

  protected handlerClick = () => {
    alert('click')
  }

  shouldComponentUpdate(nextProps: ToggleCaseComponentProps, nextState: ToggleCaseComponentState) {
    // console.log(this.props, nextProps)
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidMount() {
    console.log('componentDidMount')
    window.addEventListener('click', this.handlerClick)

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then( res => res.json())
      .then(({ results: pokemons }) => this.setState( { pokemons, load: false } ) )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.addEventListener('click', this.handlerClick)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  protected toggle = () => {
    this.setState({ mode: this.state.mode === 'lower' ? 'upper' : 'lower' })
  }

  render() {
    console.log('render')
    return (
      // ou faz assim no onClick da div ou faz o bind la em cima
      // na linha 16 para não perder o contexto do método toggle()
      <div onClick={() => this.toggle()}> 
        <p>
          { this.state.mode === 'lower' 
            ? this.props.children.toLocaleLowerCase()
            : this.props.children.toUpperCase() }
        </p>
        { this.state.load && <h2>Carregando ...</h2> }
        <ul>
          {this.state.pokemons && this.state.pokemons.map((pokemon: any) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ToggleCaseComponent