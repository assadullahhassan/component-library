import Avatar from "./Avatar";
import { options } from "./constants"

export default {
    title: "Avatar",
    component: Avatar,
    args: {
        src: "https://placehold.co/200x200"
    },
    argTypes: {
        size: {
            description: "**The size of the Avatar**",
            table: {
                type: {
                    summary: options.sizes.map(option => `'${option}'`).join("|")
                },
            },
            control: { type: 'select', options: options.sizes },
        },
       
    }   

}

const Template = (args) => <Avatar {...args} />

const ListTemplate = ({items, ...args}) => 
    items.map((item, index) => 
        <Avatar key={index} {...args} {...item} />
    ) 

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = {
    items: options.sizes.map((size) => ({ size })),
}
