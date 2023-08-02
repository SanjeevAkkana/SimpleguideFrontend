import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MainLayout, Subscribe } from '../components'
import Service from '../assets/Services.png';
import AppDev from '../assets/AppDevelopment.png';
import WebDev from '../assets/WebDevelopment.png';
import ContentCreator from '../assets/ContentCreation.png';

const Services = () => {

    const services = [
        {
            id: 1,
            name: "Professional Web Development Services",
            content: [
                "Our web development service offers professional and customized solutions to help businesses establish a strong online presence."
            ],
            image: WebDev
        },
        {
            id: 2,
            name: "Professional Content Creation Services",
            content: [
                "Our Content Creation service delivers meticulously crafted, formal content to captivate audiences and elevate your brand's image."
            ],
            image: ContentCreator
        },
        {
            id: 3,
            name: "Professional App Development Services",
            content: [
                "We offer professional app development services, creating customized applications to meet your business needs and enhance user experiences."
            ],
            image: AppDev
        }
    ]

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <MainLayout>
            <div className='p-2'>
                {/* Hero Section */}
                <div className='flex lg:flex-row flex-col-reverse items-center justify-center'>
                    <div className='lg:w-1/2'>
                        <p className='font-bold text-3xl pb-4'>Services by <span className='text-blue-500 font-serif'>Simple Guide</span></p>
                        <p className='font-medium'>
                            Unleash Your Potential with Expert Web Development, App Development, and Content Creation Services.
                        </p>
                        <>
                            <div className="">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="font-medium my-12 px-4 py-2 hover:text-white bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 w-fit"
                                >
                                    Note
                                </button>
                            </div>

                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        Payment Note
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">

                                                            For payments related to our services, please contact us at +91 7075972027 or reach out to us via email at simpleguidechannel@gmail.com. We will provide you with all the necessary information and assistance regarding payment options and processes
                                                        </p>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button
                                                            type="button"
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                        >
                                                            Got it !
                                                        </button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </>
                    </div>
                    <div className='lg:w-1/2 w-full block'>
                        <img src={Service} className='w-full h-full object-cover' alt='TeachImage' />
                    </div>
                </div>
                {/* Services */}
                <h1 className="text-center text-3xl md:text-4xl font-medium relative mb-12">
                    <span className="absolute left-0 top-1/2 w-16 h-px bg-blue-500"></span>
                    <span className="relative px-2 font-serif">Services</span>
                    <span className="absolute right-0 top-1/2 w-16 h-px bg-blue-500"></span>
                </h1>
                <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6'>
                    {services.map((service) => {
                        return (
                            <div key={service.id} className='py-6'>
                                <img className='h-56 w-full object-cover' src={service.image} alt={service.name} />
                                <div className=''>
                                    <h5 className="text-xl font-medium py-2 tracking-tight text-gray-900 dark:text-white">
                                        <p>
                                            {service.name}
                                        </p>
                                    </h5>
                                    <p className="text-md text-gray-700 dark:text-gray-400">
                                        <p>
                                            {service.content}
                                        </p>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Subscribe */}
            <Subscribe />
        </MainLayout>
    )
}

export default Services
