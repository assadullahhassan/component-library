import Card from "./Card";
import { options } from "./constants"

export default {
    title: "Card",
    component: Card
}

const Template = (args) => <Card {...args} />

const TemplateList = ({items, ...args}) => 
    items.map((item, index) => {
        <Card key={index} {...args} {...item} />
    }) 

export const Default = Template.bind({})

export const Clickable = Template.bind({})

Clickable.args = {
    isClickable: true,
}

export const Dragable = Template.bind({})

Dragable.args = {
    isDragable: true
}

export const Colors = TemplateList.bind({});

Colors.args = {
    items: options.colors.map((color) => ({ color })),
}

export const Sizes = () => 
    options.sizes.map((size, index) => {
        return <Card key={index} size={size} />;
    })