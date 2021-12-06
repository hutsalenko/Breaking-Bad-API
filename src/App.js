import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { form, getPerson } from './redux/actions';
import './App.scss';

import { Header } from './components/Header';
import { Spinner } from './components/Spinner';

const Home = lazy(() => import('./components/Home/index'));
const Characters = lazy(() => import('./components/Characters/index'));
const Episods = lazy(() => import('./components/Episods/index'));
const Error = lazy(() => import('./components/Error/index'));
const Modal = lazy(() => import('./components/Modal/index'));
const Subscribe = lazy(() => import('./components/Subscribe/index'));

export const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(getPerson());

        let timer = setTimeout(() => dispatch(form()), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={state.person.user.length > 0 && <Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/episods" element={<Episods />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    {state.modal.value && <Modal />}
                    {state.spinner.value && <Spinner />}
                    {/* {state.form.value && <Subscribe />} */}
                </div>
            </Suspense>
        </BrowserRouter>
    );
};
