import React from 'react'

export default function Alert(props) {

    const Captalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
      } 

  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{Captalize(props.alert.type)}:{props.alert.message}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}


// Note: props.alert &&  this thing is used here because we evaluate if this thing is true then return otherwise not return anything