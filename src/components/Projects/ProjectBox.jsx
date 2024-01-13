import { Router, createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import InfoBox from './InfoBox';
import Projects from './Projects'






const ProjectBox = (props) => {

    const data = props.projects;
    // const routeElements = () =>{
    //     data.map((data, index) => {
    //         return (
    //             <Route key={index}
    //                 path={data.id}
    //                 element={<InfoBox languages={data.languages} name={data.name} info={data.desc} />}
    //             />
    //         )
    //     })
    // }


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                //    path="/src/components/Projects"
                   path="/"
                   element={<Projects projects={data} />}>
                {
                    data.map((data, index) => {
                        return (
                            <Route key={index}
                                path={data.name}
                                element={<InfoBox languages={data.languages} name={data.name} info={data.desc} link={data.link} />}
                            />
                        )
                    })
                }
            </Route>
        )
    )




    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}


export default ProjectBox;