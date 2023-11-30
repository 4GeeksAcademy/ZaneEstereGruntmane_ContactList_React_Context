const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]
		},

		actions: {
			getAgenda: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/zaneestere");
				const jsonResponse = await response.json();
				console.log(jsonResponse)
				setStore({ contacts: jsonResponse });
			},


			addContact: async (contactData) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
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
				});

				const newContact = await response.json();
				setStore({
					contacts: [...store.contacts, newContact],
				});
			},

			deleteContact: async (id) => {
				const actions = getActions();
				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
				});
				await actions.getActions();
			};


			editContact: async (id) => {
				const actions = getActions();
				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
				});
				await actions.getActions();
			};
		}

	}
}

export default getState;
