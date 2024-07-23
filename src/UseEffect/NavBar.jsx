import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    // case1 : Run on every Render
    useEffect(()=>{
        alert("Hey I will render on every run")
    })

    //case2 : Run only on first render
    useEffect(()=> {
        alert("Hey i will run on first render")
    })

    //case3 : Run only on certain value change
    useEffect(()=>{
        alert("Hey I am running becuase color is changes")
    }, [color])

    return (
        <div>
            i am navbar {color} hehe
        </div>
    )
}

export default Navbar