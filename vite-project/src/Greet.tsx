type GreetProps = {
    message: string
    age: number
}
export const Greet = (props: GreetProps ) => {
    return ( 
        <div>
            <h1>{props.message}</h1>
            <h1>I am {props.age} years old.</h1>
        </div>
    )
}


export const BasicProps = () => {
    return (
        <div>
            <Greet message="Hi am Peace," age={20}/>
            <Greet message="Yo am GodSon," age={24}/>
            <Greet message="Good Evening, Ifeanyi here," age={26}/>
        </div>
    )
}

