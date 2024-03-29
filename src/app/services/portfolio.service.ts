import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competencia } from '../model/competencia';
import { Experiencia } from '../model/experiencia';
import { Formacion } from '../model/formacion';
import { FormacionComp } from '../model/formacion-comp';
import { Persona } from '../model/persona.model';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }


  //PERSONA

  //urlPersona = 'http://localhost:8080/personas/';
  urlPersona = 'https://portfolio-backend-production-50ca.up.railway.app/personas/';
  
 //Solicitar datos de persona
  public getPersona(): Observable<Persona>{//Observable para la petición asíncrona.
    return this.http.get<Persona>(this.urlPersona + 'detalle/1');
  }

  //Actualizar los datos de una persona
  public editarPersona(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.urlPersona + 'editar/'+ id, persona);
  }


  //EXPERIENCIA LABORAL

  //urlExperiencia = 'http://localhost:8080/experiencia/';
  urlExperiencia = 'https://portfolio-backend-production-50ca.up.railway.app/experiencia/';
  
  //Solicitar lista de experiencias laborales
  public listaExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlExperiencia + 'traer');
  }
  
  //Solicitar datos de una experiencia laboral particular
  public detalleExperiencia(id: number): Observable<Experiencia>{
    /* alert(this.urlExperiencia + 'detalle/' + id + "   PRUEBA"); */

    return this.http.get<Experiencia>(this.urlExperiencia + 'detalle/' + id);
  }
  
  //Dar de alta una nueva experiencia laboral
  public crearExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.urlExperiencia + 'crear', experiencia);
  }

  //Actualizar una experiencia laboral
  public editarExperiencia(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.urlExperiencia + 'editar/'+ id, experiencia);
  }

    //Borrar experiencia laboral
  public borrarExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.urlExperiencia + 'borrar/' + id);
  }


  //FORMACIÓN ACADÉMICA

  //urlFormacion = 'http://localhost:8080/formacion/';
  urlFormacion = 'https://portfolio-backend-production-50ca.up.railway.app/formacion/';

    //Solicitar lista de formación académica
  public listaFormacion(): Observable<Formacion[]>{
    return this.http.get<Formacion[]>(this.urlFormacion + 'traer');
  }

  //Solicitar datos de una formación académica en particular.
  public detalleFormacion(id: number): Observable<Formacion>{
    return this.http.get<Formacion>(this.urlFormacion + 'detalle/' + id);
  }

  //Dar de allta una nueva formación.
  public crearFormacion(formacion: Formacion): Observable<any>{
    return this.http.post<any>(this.urlFormacion + 'crear', formacion);
  }

  //Editar formación académica
  public editarFormacionAcademica(id: number, formacion: Formacion): Observable<any>{
    return this.http.put<any>(this.urlFormacion + 'editar/' + id, formacion);
  }

  //Borrar formación académica
  public borrarFormacion(id: number): Observable<any>{
    return this.http.delete<any>(this.urlFormacion + 'borrar/' + id);
  }


    //FORMACIÓN COMPLEMENTARIA

  //urlFormacionComp = 'http://localhost:8080/formacioncomp/';
  urlFormacionComp = 'https://portfolio-backend-production-50ca.up.railway.app/formacioncomp/';

    //Solicitar lista de formación complementaria
  public listaFormacionComp(): Observable<FormacionComp[]>{
    return this.http.get<FormacionComp[]>(this.urlFormacionComp + 'traer');
  }

  //Solicitar datos de una formación complementaria en particular.
  public detalleFormacionComp(id: number): Observable<FormacionComp>{
    return this.http.get<FormacionComp>(this.urlFormacionComp + 'detalle/' + id);
  }

  //Dar de alta una nueva formación complementaria.
  public crearFormacionComp(formacionComp: FormacionComp): Observable<any>{
    return this.http.post<any>(this.urlFormacionComp + 'crear', formacionComp);
  }

  //Editar formación complementaria
  public editarFormacionComp(id: number, formacionComp: FormacionComp): Observable<any>{
    return this.http.put<any>(this.urlFormacionComp + 'editar/' + id, formacionComp);
  }

  //Borrar formación complementaria
  public borrarFormacionComp(id: number): Observable<any>{
    return this.http.delete<any>(this.urlFormacionComp + 'borrar/' + id);
  }

  //COMPETENCIAS

  //urlCompetencias = 'http://localhost:8080/competencias/';
  urlCompetencias = 'https://portfolio-backend-production-50ca.up.railway.app/competencias/';

  //Solicitar un listado con las competencias laborales.
  public listaCompetencias(): Observable<Competencia[]>{
    return this.http.get<Competencia[]>(this.urlCompetencias + 'traer');
  }

  //Solicitar datos de una competencia en particular
  public detalleCompetencia(id: number): Observable<Competencia>{
    return this.http.get<Competencia>(this.urlCompetencias + 'detalle/' + id);
  }

  //Crear una nueva competencia.
  public crearCompetencia(competencia: Competencia): Observable<any>{
    return this.http.post<any>(this.urlCompetencias + 'crear', competencia);
  }

  //Actualizar los datos de una competencia
  public  editarCompetencia(id: number, competencia: Competencia): Observable<any>{
    return this.http.put<any>(this.urlCompetencias + 'editar/' + id, competencia);
  }

  //Borrar competencia
  public borrarCompetencia(id: number): Observable<any>{
    return this.http.delete(this.urlCompetencias + 'borrar/' +id);
  }


  //PROYECTO

  //urlProyectos = 'http://localhost:8080/proyectos/';
  urlProyectos = 'https://portfolio-backend-production-50ca.up.railway.app/proyectos/';

  //Solicitar lista de proyectos
  public listaProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlProyectos + 'traer');
  }
  
  //Solicitar datos de un proyecto en particular
  public detalleProyecto(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.urlProyectos + 'detalle/' + id);
  }
  
  //Subir un proyecto
  public crearProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.urlProyectos + 'crear', proyecto);
  }

  //Actualizar los datos de un proyecto
  public editarProyecto(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.urlProyectos + 'editar/'+ id, proyecto);
  }

    //Borrar proyecto
  public borrarProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.urlProyectos + 'borrar/' + id);
  }
}

