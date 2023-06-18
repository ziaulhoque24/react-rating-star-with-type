# react-stars :star:
###### A simple star rating component for your React projects

![React Rating stars](http://i.imgur.com/VDbzbqF.gif)

### Get started quickly

###### Install react-stars package with NPM:
`npm install react-rating-star-with-type --save`

###### Install react-stars package with Yarn:
`yarn add react-rating-star-with-type`

Then in your project include the component:

```javascript
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'

export default function app(){
    const [star, setStar] = useState(5);

    const onChange=(nextValue)=>{
        setStar(nextValue)
    }
    
    return <ReactStars 
    onChange={onChange} 
    value={4.2}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]} 
    />
}




```
### API

This a list of props that you can pass down to the component:

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `className`  | Name of wrapper class | `""` | string |
| `count`  | How many total stars you want  | 5 | number |
| `value`  | Set rating value  | 0 | number |
| `emptyIcon` | Which character you want to use as a star | `(react-icons)` | ReactNode |
| `halfIcon` | Which character you want to use as a half star | `(react-icons)` | ReactNode |
| `filledIcon` | Which character you want to use as a active star | `(react-icons)` | ReactNode |
| `inactiveColor` | Color of inactive star | `#808080` | string |
| `activeColors` | Colors of active star (depend of value) | `[]` | String[] |
| `activeColor` | Color of selected or active star | `#FED900` | string |
| `size` | Size of stars (if provide string you must mention unit , for example: "1rem" ) | `14` | number or String |
| `style` | style object for component wrapper | `{}` | object |
| `isEdit` | Should you be able to select rating or just see rating (for reusability) | `false` | boolean |
| `isHalf` | isHalf true means you can select half star (make sure isEdit true if you set isHalf true) | `false` | boolean |
| `valueShow` | Should component use valueShow, if need Rating show with stars | `false` | boolean
| `onChange(new_rating)` | Will be invoked any time the rating is changed | `undefined` | function |

### Help improve the component
Hit star on gitHub - [https://github.com/ziaulhoque24/react-rating-star-with-type](https://github.com/ziaulhoque24/react-rating-star-with-type)

### Requirements
You will need to have React in your project in order to use the component, I didn't bundle React in the build, because it seemed like a crazy idea.

It also works perfectly with next js in client components. with the server component, you may get an error!