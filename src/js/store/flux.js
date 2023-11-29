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

				await fetch("https://playground.4geeks.com/apis/fake/contact", {
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

				})

				setStore({
					contacts: [...store.contacts, addContact.body],
				});

			}

		}
	}
}

export default getState;
