import React from "react";

function AddDonation(){

  return(
    <div style={{textAlign:"center",marginTop:"30px"}}>

      <h2>Add Food Donation</h2>

      <form>

        <input
        type="text"
        placeholder="Food Name"
        style={{margin:"10px",padding:"8px"}}
        />

        <br/>

        <input
        type="number"
        placeholder="Quantity"
        style={{margin:"10px",padding:"8px"}}
        />

        <br/>

        <input
        type="text"
        placeholder="Location"
        style={{margin:"10px",padding:"8px"}}
        />

        <br/>

        <input
        type="time"
        style={{margin:"10px",padding:"8px"}}
        />

        <br/>

        <button style={{padding:"10px"}}>
          Submit Donation
        </button>

      </form>

    </div>
  )
}

export default AddDonation