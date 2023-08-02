import React, { Fragment, useState } from 'react';
import { Menu, Dialog, Transition } from '@headlessui/react';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className='w-full px-1 md:px-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <p ><a href='/' className='sm:text-3xl text-2xl font-serif'>Simple <span className='text-blue-500 font-serif'>Guide</span></a></p>
                </div>
                <div className='hidden md:block'>
                <div className='flex gap-x-8'>
                    <p className='text-gray-700 hover:text-black cursor-pointer font-medium p-2'><a href='/'>Home</a></p>
                    <p className='text-gray-700 hover:text-black cursor-pointer font-medium p-2'><a href='/services'>Services</a></p>
                    <p className='text-gray-700 hover:text-black cursor-pointer font-medium p-2'><a href='/programs'>Programs</a></p>
                    <p className='cursor-pointer font-medium'>
                        <>
                            <div className="flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="rounded-md bg-blue-500 text-white px-4 py-2 "
                                >
                                    Contact
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
                                                        Contact details
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            You can contact the Simple Guide at +917075972027 or via email at simpleguidechannel@gmail.com
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
                    </p>
                </div>
                </div>
                <div className="flex md:hidden">
                    <Menu as="div" className="">
                        <div className='flex justify-center items-center'>
                            <Menu.Button className="">
                                <BiMenuAltRight
                                    size={24}
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-6 mt-2 w-fit px-6 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        <p className='font-medium text-gray-700 hover:text-black cursor-pointer px-2 py-2 text-sm'><a href='/'>Home</a></p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className='font-medium text-gray-700 hover:text-black cursor-pointer px-2 py-2 text-sm'><a href='/services'>Services</a></p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className='font-medium text-gray-700 hover:text-black cursor-pointer px-2 py-2 text-sm'><a href='/programs'>Programs</a></p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className='font-medium text-gray-700 hover:text-black cursor-pointer px-2 py-2 text-sm'>
                                            <>
                                                <div className="">
                                                    <button
                                                        type="button"
                                                        onClick={openModal}
                                                        className=""
                                                    >
                                                        Contact
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
                                                            <div className="min-h-full  p-4 text-center">
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
                                                                            Contact details
                                                                        </Dialog.Title>
                                                                        <div className="mt-2">
                                                                            <p className="text-sm text-gray-500">
                                                                                You can contact the Simple Guide at +917075972027 or via email at simpleguidechannel@gmail.com
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
                                        </p>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div >
    )
}

export default Navbar
