import React from 'react'


import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@mui/material/";
import { Input as AntdInput } from "antd";

import { Container } from './styles'


const Filters = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
          firstName: '',
          select: {}
        }
      });
      const onSubmit = data => console.log(data);


    return (
        <>

        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='formContainer'>
                    <div className='formContainerControl'>
                        <label>Edificio</label>
                        <Controller
                            name="Edificio"
                            className="materialUISelect"
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                { value: "EMO", label: "EMO" },
                                { value: "La Dehesa", label: "La Dehesa" },
                                { value: "Vitacura", label: "Vitacura" }
                                ]}
                            />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className='formContainerControl'>
                        <label>Tipo Unidad</label>
                        <Controller
                            name="Tipo"
                            className="materialUISelect"
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                { value: "EMO", label: "EMO" },
                                { value: "La Dehesa", label: "La Dehesa" },
                                { value: "Vitacura", label: "Vitacura" }
                                ]}
                            />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className='formContainerControl'>
                        <label>Piso</label>
                        <Controller
                            name="Piso"
                            className="materialUISelect"
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                { value: "EMO", label: "EMO" },
                                { value: "La Dehesa", label: "La Dehesa" },
                                { value: "Vitacura", label: "Vitacura" }
                                ]}
                            />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className='formContainerControl'>
                        <label>Unidad</label>
                        <Controller
                            name="Unidad"
                            className="materialUISelect"
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                { value: "EMO", label: "EMO" },
                                { value: "La Dehesa", label: "La Dehesa" },
                                { value: "Vitacura", label: "Vitacura" }
                                ]}
                            />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className='formContainerControl'>
                        <label>Servicio</label>
                        <Controller
                            name="Servicio"
                            className="materialUISelect"
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                { value: "EMO", label: "EMO" },
                                { value: "La Dehesa", label: "La Dehesa" },
                                { value: "Vitacura", label: "Vitacura" }
                                ]}
                            />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </div>
                </div>

                <div className='buttonGroup'>
                    <input type="submit" className='primary' value="aplicar"/>
                    <input type="submit" value="Eliminar"/>    
                </div>
            
                
            </form>
        
        </Container>
        </>
    )
}

export default Filters