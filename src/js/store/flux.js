const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]
		},

		actions: {
			getAgenda: async () => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/zaneestere");
				const jsonResponse = await response.json();
				console.log (jsonResponse)
				setStore({ contacts: jsonResponse });
			},

			addContact: async (contactData) => {
				const store = getStore();
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

			}

		}
	}
}

export default getState;
