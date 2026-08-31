import Picture from "./Picture"
// import 

export default {
    title: "Picture",
    component: Picture,
    args: {
        src: "https://placehold.co/400x400",
        width: 200,
    },
    argTypes: {
        width: { control: "number"},
        height: { control: "number"},
    }
}

const Template = (args) => <Picture {...args} />

export const Default = Template.bind({})


export const Rounded = Template.bind({})
Rounded.args = {
    isRounded: true
}

export const Height = Template.bind({})
Height.args = {
    height: 400
}

export const Width = Template.bind({})
Width.args = {
    width: 400
}
