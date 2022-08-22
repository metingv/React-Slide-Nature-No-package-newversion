import React, { useState, useEffect,useRef } from 'react'
import './Slider.scss'
import dataSlider from './dataSlider'

export default function Slider() {

    const [t, setT] = useState()
    const [t1, setT1] = useState()
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const buttonNext = useRef()
    const buttonDown = useRef()
    const buttonUp = useRef()
    const buttonLeft = useRef()

    useEffect(() => {
        setT(`translateY(${-175 * count}px)`)
        setT1(`translateX(${-600 * count1}px)`)
        if (count !== (dataSlider.length - 3 )) {
            buttonNext.current.style.display = "flex"
            buttonDown.current.style.display = "flex"
        }
        else if (count === (dataSlider.length - 3 )) {
            buttonNext.current.style.display = "none"
            buttonDown.current.style.display = "none"
        }
        
        if(count === 0){
            buttonLeft.current.style.display = "none"
            buttonUp.current.style.display = "none"
        }
        else{
            buttonLeft.current.style.display = "flex"
            buttonUp.current.style.display = "flex"
        }
    }, [count,count1])

    const nextSlide = () => {
        setCount((c) => c + 1)
        setCount1((c) => c + 1)

    }

    const prevSlide = () => {
        setCount((c) => c - 1)
        setCount1((c) => c - 1)
    }

    const moveDot = index => {
        console.log(index)
        if( index <= dataSlider.length - 3 ){
            setCount(index )          
        }
        else if (index <= dataSlider.length - 2 ){
            setCount(index - 1)   
        }
 
        setCount1(index )        
    }

    return (
        <>

            <div className="slides">

                <div className="slider1">
                    {dataSlider.map((obj, index) => {
                        return (
                            <img
                                src={obj.src} style={{ transform: t1 }} alt="" />
                        )
                    })}
                    <button
                        onClick={nextSlide}
                        className="next"
                        ref={buttonNext}
                    >
                    <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button
                        onClick={prevSlide}
                        className="prev"
                        ref={buttonLeft }
                    >
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                </div>


                <div className="slider2">
                    {
                        dataSlider.map((data, index) => {
                            return (
                                <img
                                    onClick={() => moveDot(index)}
                                    className={count1 === index  ? "active" : ""}
                                    src={data.src} style={{ transform: t }} alt="" />
                            )
                        })
                    }
                    <button
                        onClick={nextSlide}
                        className="next"
                        ref={buttonDown}
                    >
                    <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <button
                        onClick={prevSlide}
                        className="prev"
                        ref={buttonUp }
                    >
                     <i class="fa-solid fa-angle-up"></i>
                    </button>
                </div>

            </div>
        </>
    )
}
