const mongoose = require('mongoose');
const { populate } = require('./user');

const User = require('./user');

mongoose.connect("mongodb+srv://farijaakter:01521226424faru@cluster0.x3pam.mongodb.net/webdev?retryWrites=true&w=majority", () => {
    console.log("mongodb connected");
},
    e => console.error(e)
)
run()
async function run() {

    try {
        // const user = await User.findById('6281e649c320a6256741aa20')
        //const user = await User.find({ name: "Sally" })
        //const user = await User.findOne({ name: "Farija Akter" })
        //const user = await User.deleteOne({ name: "Farija Akter" })
        //const user = await User.where("name").equals("Farija Akter")

        // const user = await User.where("name").equals("Farija Akter").populate('bestFriend').limit(1)
        // // user[0].bestFriend = "6281f464e790c8030f4d58b5"
        // // await user[0].save()

        // const user = await User.findOne({ name: "Farija Akter" })
        const user = await User.findOne({ name: "Farija Akter", email: "farija@gmail.com" })
        // const user = await User.where().byName("Farija Akter")


        await user.save()
        console.log(user)
        //console.log(user.namedEmail)
        //user.sayHi()
    } catch (e) {
        console.log(e.message)
    }
}

    // const user = new User({
    //     name: "Farija Akter",
    //     age: "26"
    // })
    // await user.save()

// const user = await User.create({
//     name: "Farija Akter",
//     age: 27,
//     email: "farija@gmail.com",
//     hobbies: ["Mehedi Art", "Book Reading"],
//     address: {
//         street: "Shantibag R/A",
//         city: "Chattogram"
//     },
// })
//         // user.createdAt = 5
//         // await user.save()


