import './CreateNote.scss';

import { Paper } from '@material-ui/core';
import { Collapse, IconButton, InputBase, TextField } from '@mui/material';
import { Form, Formik ,Field} from 'formik';
import * as Yup from 'yup'
import AddIcon from '@mui/icons-material/Add';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import {createNote} from '../../Services/Note'

export default function CreateNote(){
    
    
    return(

            <Formik
                initialValues = {{
                    title:'',
                    description:''
                }}
                validationSchema={Yup.object({
                    title:Yup.string(),
                    description:Yup.string().required()
                })}
                onSubmit = {values=>{
                    console.log(values);
                    createNote(values).then((response)=>alert('note created'))
                                    .catch((err)=>alert('failed',err))
                }}
            >
            {formik=>(
              <>
              <Form onSubmit = {formik.handleSubmit}>
                <div className='title'>
                <Field
                    as={TextField}
                    id='title'
                    name='title'
                    label='Title'
                    className='title'
                    size='medium'
                    style={{width:'100vh'}}
                    value={formik.values.title}
                    onChange ={formik.handleChange}
                    
                />
                </div>
                    <div className='note'>
                    <Field
                    as={TextField}
                    placeholder='Note'
                     id='description'
                    name='description'
                    label='Note'
                    value={formik.values.description}
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                    style={{width:'100vh'}}
                    />
                    <IconButton type='Submit' >   
                        <AddCircleTwoToneIcon fontSize='large' color='yellow'/>
                    </IconButton>
                    </div>
                    
                </Form>
                </>
                )}
            </Formik>

        
        
    )
}
 