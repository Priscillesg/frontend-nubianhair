// import queryString from 'query-string'



// const getData = () =>{

//     const query_params = {
//         'term': 'urlEncodedTerm', 'location': 'urlEncodedLocation'
//     }
//     const query = queryString.stringify(query_params);

//     return fetch('http://127.0.0.1:8000/api_list/', {
//         'method':'GET',
//         headers: {
//           'Content-Type':'application/json',
//           'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
//         }
//     }, query)
// }

// useEffect(() => {
//     setBusinesses([]);
//     const fetchData = async () => {
//         try {
//             const rawData = await getData.get('/businesses/search', query=query);
//             const resp = await rawData.json();
//             setBusinesses(resp.businesses);
            
//         } catch(e) {
//             console.error(e);
//         }
//     };
//     fetchData();
// }, [searchParams]);




        // `/api_list?`
                // const urlEncodedTerm = encodeURI(term);
        // const urlEncodedLocation = encodeURI(location);
        // history.push(
        // `/api_list?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
        // );
        // console.log(urlEncodedTerm )
        // const query_params = {
        //     'term': 'urlEncodedTerm', 'location': 'urlEncodedLocation'
        // }
        // setSearchParams({
        //     "term": `${urlEncodedTerm}`,

        //     "location": `${urlEncodedLocation}`
        // })
    
        // const query = queryString.stringify(searchParams);


            // const [searchParams, setSearchParams] = useState({
        // "term": "",
        // "location": ""
    // });

    // let history = useHistory()

        // setSearchParams({
        //     "term": `${term}`,
        //     "location": `${location}`
        // })
        // setSearchParams(query)

        // useEffect(() => {
        //     setBusinesses([]);





    // const [selectedBusiness, SetSelectedBusiness] = useState({})



















    // getting all businesses
    // const query_params = {
    //     'term': 'urlEncodedTerm', 'location': 'urlEncodedLocation'
    // }
    // const query = queryString.stringify(query_params);

    
    
    // useEffect( () => {
    //   fetch('http://127.0.0.1:8000/api_list/', {
    //     'method':'GET',
    //     headers: {
    //       'Content-Type':'application/json',
    //       'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
    //     }
    //   })
    //   .then(resp => resp.json())
    //   .then(resp => setBusinesses(resp))
    //   .catch(error => console.log(error))
  
    // }, []);

     // selecting a business

    // const [selectedBusiness, SetSelectedBusiness] = useState({})

   
    // const selectABusiness = (id) => {
    //     const business_id = id
    //     fetch(`http://127.0.0.1:8000/api_list/${business_id}/`, {
    //       'method':'GET',
    //       headers: {
    //         'Content-Type':'application/json',
    //         'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
    //       }
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => SetSelectedBusiness(resp))
    //     .catch(error => console.log(error))
    
    //   };


      // }, [searchParams]);