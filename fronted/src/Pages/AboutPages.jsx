import React from 'react'
import Marquee from "react-fast-marquee";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function AboutPages() {
  return (
    <div>
      <Marquee autoFill={true}  className='bg-green-500'>
      <p>Ashish Rijal</p>
      </Marquee>





      <Accordion>
      <AccordionItem className='border bg-gray-200' header="What is your Name?">
        Im Ashish Rijal.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>

    </div>

      
    
  )
}
