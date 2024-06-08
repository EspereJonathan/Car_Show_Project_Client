'use client';
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import authProvider from '../../providers/authProvider';
import CustomLoginPage from './login/login';
import dataProvider from '../../providers/dataProvider';
import UserIcon from '@mui/icons-material/Group';
import CarIcon from '@mui/icons-material/DirectionsCar';
import ImageIcon from '@mui/icons-material/Image';
import AppointmentIcon from '@mui/icons-material/Event';
import CarList from './cars/CarList';
import CarCreate from './cars/CarCreate';
import CarEdit from './cars/CarEdit';
import ImageList from './images/ImageList';
import ImageCreate from './images/ImageCreate';
import ImageEdit from './images/ImageEdit';
import AppointmentList from './appointments/AppointmentList';
import AppointmentEdit from './appointments/AppointmentEdit';

const AdminApp: React.FC = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
    >
        <Resource
            name="users"
            list={ListGuesser}
            edit={EditGuesser}
            icon={UserIcon}
        />
        <Resource
            name="cars"
            list={CarList}
            create={CarCreate}
            edit={CarEdit}
            icon={CarIcon}
        />
        <Resource
            name="images"
            list={ImageList}
            create={ImageCreate}
            edit={ImageEdit}
            icon={ImageIcon}
        />
        <Resource
            name="appointments"
            list={AppointmentList}
            edit={AppointmentEdit}
            icon={AppointmentIcon}
        />
    </Admin>
);

export default AdminApp;
