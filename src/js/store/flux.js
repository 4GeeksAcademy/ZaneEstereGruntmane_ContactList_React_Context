const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://playground.4geeks.com/apis/fake/contact",
			urlWithSlug: "https://playground.4geeks.com/apis/fake/contact/agenda/zaneestere",
			contacts: [

			]
		},

		actions: {

			getContacts: async () => {
				const store = getStore();
				const response = await fetch(getStore().urlWithSlug);
				const jsonResponse = await response.json();
				console.log(jsonResponse)
				setStore({ contacts: jsonResponse });
			},

			newContact: async (contactData) => {
				const opt = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": contactData.fullName,
						"email": contactData.email,
						"agenda_slug": "zaneestere",
						"address": contactData.address,
						"phone": contactData.phone,
					})
				}
				const response = await fetch(getStore().url, opt)
				const jasonResponse = await response.json()
				console.log(jasonResponse)
				return true
			},

			setContactToEdit: (contact) => {
				console.log(contact);
				setStore({ contactToEdit: contact });
			},

			editContact: async (newContactData, id) => {
				const opt = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": newContactData.fullName,
						"email": newContactData.email,
						"agenda_slug": "zaneestere",
						"address": newContactData.address,
						"phone": newContactData.phone,
					})
				}
				const response = await fetch(getStore().url + id, opt)
				const jasonResponse = await response.json()
				console.log(jasonResponse)
			},

			getOneContact: async (id) => {
				const response = await fetch(getStore().url + id);
				const jsonResponse = await response.json();
				setStore({ singleContact: jsonResponse });
			},


			deleteContact: async (id) => {
				const response = await fetch(getStore().url + id, opt);
				const opt = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify()
				}

				const jasonResponse = await response.json();
				console.log(jasonResponse)
				await getActions().getContacts();
			}
		}

	}

};

export default getState;
