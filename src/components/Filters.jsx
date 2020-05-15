import React from 'react';

class Filters extends React.Component {
	handleClickOrder = (e)=> {
		e.preventDefault();
		this.props.orderSelected(e.target.name);
		
	}

	handleClickFilter = (e)=>{
		e.preventDefault();
		const pesquisa = document.querySelector('.filters__search__input')
		this.props.filterName(pesquisa.value)

		}

	render() {

		return (
			<div>
			<div className="container" data-testid='filters'>
			<section className="filters">
			  <div className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar"/>
  
				<button className="filters__search__icon" onClick={this.handleClickFilter}>
				  <i className="fa fa-search" />
				</button>
			  </div>
  
			  <button className="filters__item is-selected" onClick={this.handleClickOrder} name="name">
				Nome <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"  onClick={this.handleClickOrder} name="country">
				País <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"  onClick={this.handleClickOrder} name="company">
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"  onClick={this.handleClickOrder} name="department">
				Departamento <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"  onClick={this.handleClickOrder} name="admissionDate">
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		  </div>
  
		
			);
	}
}

export default Filters;
