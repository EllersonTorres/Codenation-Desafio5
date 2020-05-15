import React from "react";
import Contact from './Contact';


class Contacts extends React.Component {
	render() {

		const { contacts, order, filter } = this.props

		const comparation = (a, b)=>{
			const valueA=a[order]
			const valueB=b[order]
			if (valueA < valueB ) return -1
			else if (valueA > valueB ) return 1
			else return 0
		}

		order && contacts.sort(comparation)
		
		const newContacts = (contacts && filter) ? contacts.filter(contact=>contact.name.includes(filter)) : contacts;


		 return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
				<article className="contact">
							<span className="contact__avatar" />
							<span className="contact__data">Nome</span>
							<span className="contact__data">Telefone</span>
							<span className="contact__data">País</span>
							<span className="contact__data">Admissão</span>
							<span className="contact__data">Empresa</span>
							<span className="contact__data">Departamento</span>
						</article>

					{
						newContacts && newContacts.map((contact)=>(<Contact key={contact.id} contact={contact} />))

					}

				</section>
			</div>


		);
	}
}

export default Contacts;
