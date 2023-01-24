
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Illustration from '../images/hero-illustration.svg';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createInvestor as createInvestorMutation,
         updateInvestor as updateInvestorMuation,
         deleteInvestor as deleteInvestorMutation } from './../graphql/mutations'
import { listInvestors,getInvestor } from './../graphql/queries'
import Table from './../components/table.jsx'


function Investors() {
  const [rowdata, setRowData] = useState([])

  const onAddRowClick = () => {
    setRowData(
      rowdata.concat({ firstName: "",lastName: "", email: "",phone: "", country: "", comment: "" })
    )
  }
  const columns = [
    {
      Header: "Name",
      accessor: "firstName",
    },
    {
      Header: "LastName",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Comment",
      accessor: "comment",
    },
  ]
  /*const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos()
  }, [])



  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listInvestors))
      const todos = todoData.data.listInvestors.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }*/

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/* Site header */}
          <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Site branding */}
                <div className="shrink-0 mr-4">
                  {/* Logo */}
                  <Link className="block" to="/" aria-label="Cruip">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                      <g fillRule="nonzero" fill="none">
                        <g className="fill-blue-500" transform="translate(3 3)">
                          <circle cx="5" cy="5" r="5" />
                          <circle cx="19" cy="5" r="5" />
                          <circle cx="5" cy="19" r="5" />
                          <circle cx="19" cy="19" r="5" />
                        </g>
                        <g className="fill-sky-300">
                          <circle cx="15" cy="5" r="5" />
                          <circle cx="25" cy="15" r="5" />
                          <circle cx="15" cy="25" r="5" />
                          <circle cx="5" cy="15" r="5" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </header>
    
          {/* Page content */}
          <main className="grow">
            <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-36 pb-12 md:pt-40 md:pb-20">
                  <div className="lg:flex lg:space-x-12 xl:space-x-16">
                    {/* Left side */}
                    <div className="grow lg:mt-16 mb-16 lg:mb-0 text-center lg:text-left">
                      <h1 className="h2 mb-8">Listados de Inversionistas de FullyShip</h1>
    
                      <div className="mb-12">
                        <ul className="inline-flex flex-col text-slate-500 space-y-2.5">

                        <div className="container mx-auto">
                          <button
                                onClick={onAddRowClick}
                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                           >
                           Add Row
                         </button>
                         <div className="flex justify-center mt-8">
                            <Table columns={columns} data={rowdata} />
                         </div>
                       </div>



                        </ul>
                      </div>
    
                      {/* Press logos */}
    
                    </div>
    
                    {/* Right side */}
                    <div className="relative shrink-0 text-center lg:text-left">
                      {/* Bg */}
                      <div
                        className="absolute inset-0 mb-44 -mx-4 sm:-mx-6 lg:-mt-[9999px] lg:ml-0 lg:-mr-[9999px] rounded-bl-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
                        aria-hidden="true"
                      />
    
                      {/* Illustration */}
                      <img
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-40 ml-20 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                        src={Illustration}
                        width="960"
                        height="960"
                        aria-hidden="true"
                      />
    
                      <div className="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      );
    }
    
    export default Investors;

