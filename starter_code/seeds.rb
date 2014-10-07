require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

friends = Category.create(name: "friends")
family = Category.create(name: "family")

Contact.create(name: "Nancy Kaufer", age: 30, address: "20 Pine Street, Woodmere, NY 11730", phone_number: "917-406-7812", picture: "img/avatar.png", category_id: friends.id)
Contact.create(name: "Amy Williamson", age: 20, address: "35 Princeton Street, Rockville Centre, NY 11570", phone_number: "917-604-7892", picture: "./img/avatar.png", category_id: family.id)
Contact.create(name: "Judy Ortenberg", age: 45, address: "114 Fairlawan Street, Oceanside, NY 11599", phone_number: "917-406-8309", picture: "./img/avatar.png", category_id: family.id)
Contact.create(name: "Janie Cohan", age: 62, address: "104 Maple Street, Rockville Centre, NY 11570", phone_number: "516-222-5679", picture: "./img/avatar.png", category_id: family.id)
