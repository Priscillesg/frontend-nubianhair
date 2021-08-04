import React, {useState, useEffect}from 'react'


const SearchBar = (props) => {
    const [term, setTerm] = useState('')
    const [location, setLocation] = useState('')
    const [token] = useCookies(['mytoken'])

    const submit = (event) => {
        event.preventDefault();
        if(typeof props.search === 'function') {
            props.search(term, location);
        }

        };

    return (
        <div>
            <div class="row g-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" value={term} onChange ={(event)=>setTerm(event.target.value)}/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Where" aria-label="Last name" value={location} onChange ={(event)=>setLocation(event.target.value)}/>
                </div>
                <div>
                    <button type="button" class="btn btn-primary"onClick={submit} >Search</button>
                </div>
                
            </div>
        </div>
    )
}

export default SearchBar