import ServiceHero from "./Services/ServicesHero";
import ServiceScreening from './Services/ServiceScreening'
import ServicesIndustries from './Services/ServicesIndustries'

function Service(){
    return(
        <>
          <ServiceHero />
          <ServiceScreening />
           <ServicesIndustries />
        </>
    )
}
export default Service