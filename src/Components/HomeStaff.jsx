function HomeStaffComp(){
    return(
        <>
            <div className="w-full flex flex-col flex-wrap p-20 justify-center bg-stone-100">
                <h1 className="text-5xl text-center">Kairox Organization</h1><br/><hr className="text-stone-500 m-2"/>
                <div className="w-full flex justify-evenly flex-wrap p-10">
                    <div className="shadow-sm p-10 text-center flex-col bg-stone-300 rounded-xl m-5 lg:w-1/5 w-xs">
                        <i className="bi bi-backpack text-7xl"></i><br/><br/>
                        <h2 className="text-3xl">4625</h2>
                        <h1 className="text-lg">STUDENTS</h1>
                    </div>

                    <div className="shadow-sm p-10 text-center flex-col bg-stone-300 rounded-xl m-5 lg:w-1/5 w-xs">
                        <i className="bi bi-person-video3 text-7xl"></i><br/><br/>
                        <h2 className="text-3xl">325</h2>
                        <h1 className="text-lg">PEDALOGICAL STAFF</h1>
                    </div>

                    <div className="shadow-sm p-10 text-center flex-col bg-stone-300 rounded-xl m-5 lg:w-1/5 w-xs">
                        <i className="bi bi-person text-7xl"></i><br/><br/>
                        <h2 className="text-3xl">362</h2>
                        <h1 className="text-lg">SUPPORT STAFF</h1>
                    </div>

                    <div className="shadow-sm p-10 text-center flex-col bg-stone-300 rounded-xl m-5 lg:w-1/5 w-xs">
                        <i className="bi bi-controller text-7xl"></i><br/><br/>
                        <h2 className="text-3xl">30+</h2>
                        <h1 className="text-lg">SPORTS</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeStaffComp;