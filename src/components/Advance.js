import React, {useState} from 'react';


const Advance = ({sortBy, onChangeSort, onSubmit}) => {

    const [formData, setFormData] = useState({
        description: '',
        image:'',
        location:''
    })

    const handleOnChangeForm = (e) => {
        let name = e.target.name, value = e.target.value
        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData({
            description: '',
            image:'',
            location:''
        })
    }

    return ( 
    <>
        <select value={sortBy} onChange={(e)=> onChangeSort(e.target.value)}>
            <option value="">No Order</option>
            <option value="location">Location</option>
        </select>

        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <label>
                Description:
                <input type="text" name="description" placeholder='Set description' value={formData.description} onChange={e=> handleOnChangeForm(e)}/>
            </label>
            <label>
                Image:
                <input type="text" name="image" placeholder='Set image' value={formData.image} onChange={e=> handleOnChangeForm(e)}/>
            </label>
            <label>
                Location:
                <input type="text" name="location" placeholder='Set location' value={formData.location} onChange={e=> handleOnChangeForm(e)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>

    </>
     );
}
 
export default Advance;