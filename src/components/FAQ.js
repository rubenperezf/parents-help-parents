import React, {useState} from "react"
import ToggleContent from "./ToggleContent"


function FAQ() {

    return (
    <div className="contactUs-aboutUs-container">
    <h1>FAQ</h1>
    <ToggleContent
      toggle={show => <button onClick={show}>What is Parents help Parents?</button>}
      content={hide => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eu
        mauris ut pharetra. Suspendisse ac vulputate eros, ut vulputate augue.
        Nullam tincidunt justo vitae orci consequat, feugiat dictum risus
        molestie. Morbi rhoncus, lacus porttitor bibendum hendrerit, nibh felis
        accumsan ipsum, vitae lacinia turpis ipsum at turpis. Curabitur in
        fermentum magna, et vehicula augue. Sed pretium quam at felis auctor,
        vitae commodo erat vestibulum. Ut euismod, nibh at ultrices consequat,
        dolor elit suscipit odio, quis tempus ipsum elit hendrerit tortor.
        Vestibulum et risus tellus. Cras dignissim, nisi ac congue gravida,
        justo mi interdum ligula, in dictum tortor nibh et urna. Sed lobortis
        ornare nibh vitae mollis. Nulla vitae lorem ac sem volutpat eleifend vel
        nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec porttitor orci eu velit molestie,
        tincidunt cursus velit sollicitudin. Maecenas eu sagittis augue, nec
        dapibus dolor.
          <button onClick={hide}>Close</button>
        </p>
      )}
    />
    <br></br>
    <ToggleContent
      toggle={show => <button onClick={show}>What is Parents help Parents?</button>}
      content={hide => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eu
        mauris ut pharetra. Suspendisse ac vulputate eros, ut vulputate augue.
        Nullam tincidunt justo vitae orci consequat, feugiat dictum risus
        molestie. Morbi rhoncus, lacus porttitor bibendum hendrerit, nibh felis
        accumsan ipsum, vitae lacinia turpis ipsum at turpis. Curabitur in
        fermentum magna, et vehicula augue. Sed pretium quam at felis auctor,
        vitae commodo erat vestibulum. Ut euismod, nibh at ultrices consequat,
        dolor elit suscipit odio, quis tempus ipsum elit hendrerit tortor.
        Vestibulum et risus tellus. Cras dignissim, nisi ac congue gravida,
        justo mi interdum ligula, in dictum tortor nibh et urna. Sed lobortis
        ornare nibh vitae mollis. Nulla vitae lorem ac sem volutpat eleifend vel
        nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec porttitor orci eu velit molestie,
        tincidunt cursus velit sollicitudin. Maecenas eu sagittis augue, nec
        dapibus dolor.
          <button onClick={hide}>Close</button>
        </p>
      )}
    />

  </div>
)
}

export default FAQ