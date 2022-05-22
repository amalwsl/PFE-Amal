import {Button,Form,FormControl } from "react-bootstrap";
import '../pages/styles.css'




const SearchBar=(setSearch)=>{
    return(
        <Form inline>
    
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=>setSearch(e.target.value)} />
      <Button variant="outline-info">Search</Button>
    </Form>
    )
}

export default SearchBar;