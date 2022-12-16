export type StoreType = typeof store


export type ProfileAvaType = {
    name: string
    surname: string
    age: number
    website: string
}
export type MyPostPageType = {
    id: number
    messages: string
}
export type MyPostPageAr = {
    id: number
    messages: string
}
export type ProfilePageType = {
    profileAva: ProfileAvaType
    MyPosts: Array<MyPostPageType>
}

export type DialogsNamesType = {
    id: number
    name: string
}

export type DialogMessagesType = {
    id: number
    messages: string
}

export type DialogsPageType = {
    dialogNames: Array<DialogsNamesType>
    dialogsMessages: Array<DialogMessagesType>
}

export type RootStoreType = {
    state: {
        ProfilePage: ProfilePageType
        DialogsPage: DialogsPageType
    }
}

type dialogsType = {
    dialogs:Array<DialogsNamesType>
    dialogsMessages: Array<DialogMessagesType>
}

const store: RootStoreType = {
    state: {
        ProfilePage: {
            profileAva: {
                name: 'Max',
                surname: 'Maslov',
                age: 29,
                website: "you",
            },
            MyPosts: [
                {
                    id: 1,
                    messages: 'hello'
                },
                {
                    id: 2,
                    messages: 's'
                },
            ],
        },

        DialogsPage: {
                dialogNames: [
                    {id: 1, name: 'ola'},
                    {id: 2, name: '22'},
                ],
                dialogsMessages: [
                    {id: 1, messages: 'Hello'},
                    {id: 2, messages: 'sddd'},
                ],
        }
    }
}


export default store