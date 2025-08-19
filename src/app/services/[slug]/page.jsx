import ServiceDetailMain from '@/components/ServiceDetail/ServiceDetailMain'
import React from 'react'
import treatments from '@/data/treatments';
import { notFound } from 'next/navigation';
const page = async ({params}) => {
  const { slug } = await params;
 const treatment = treatments.find(t => t.slug === slug);
 if(!treatment) return notFound();

  return (
    <>
     <ServiceDetailMain treatment={treatment} /> 
    </>
  )
}

export default page
