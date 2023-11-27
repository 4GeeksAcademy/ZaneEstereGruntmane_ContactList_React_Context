const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []
		},
		actions: {
			getAgenda: async () => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/zaneestere ");
				const jsonResponse = await response.json();

				setStore({ contacts: jsonResponse });
			},

			addContact: (contactData) => {
				const store = getStore();
				await fetch("https://playground.4geeks.com/apis/fake/contact" {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						const newContact = {
							"full_name": Zane Gruntmane 
							"email": zeze@zeze.com 
							"agenda_slug": zeee
							"address": Porto  Rua do Almada
							"phone": 913531276
				}
					})
		})
		setStore({ contacts: [...store.contacts, newContact]
	})
}
		}
	};
};

export default getState;
