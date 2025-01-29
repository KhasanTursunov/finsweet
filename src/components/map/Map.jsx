import React from "react";

const Map = () => {
  return (
    <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.131883019527!2d-86.11969502450235!3d39.8264606913545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b518c6faa8433%3A0xafc6695dab1e6a76!2sMarion%20County%20Public%20Health%20Department!5e0!3m2!1sen!2s!4v1738131209626!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>
  );
};

export default Map;
