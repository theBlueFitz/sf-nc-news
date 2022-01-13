

const SpecificError = ({error}) => {
    return <div className='articles'>
        <h2>{error.message}</h2>
        <img id='errorSign' src='https://images.roadtrafficsigns.com/img/lg2/K/wrong-way-sign-K-9055.jpg' alt='wrong way sign'/>
        <p>You are in the wrong place, please turn back!</p>
    </div>

}

export default SpecificError;