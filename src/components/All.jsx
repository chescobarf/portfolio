import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function All() {
  const url = "https://portfolio-chescobarf.herokuapp.com/api-portfolio/";
  // const url = "http://localhost:8000/api-portfolio/";
  const [info, setState] = useState();
  const fetchData = () => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setState(response.data);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return error;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (info === undefined) {
    return (
      <div className="App">
        <ReactLoading
          type="spinningBubbles"
          color="#5ebcee"
          height={200}
          width={200}
          className="spinner"
        />
      </div>
    );
  } else {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Christian Escobar</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="assets/img/profile.png"
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Educacion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Intereses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">
                  Certificaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#ebook">
                  E-Books
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Page Content*/}
        <div className="container-fluid p-0">
          {/* About*/}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Christian <span className="text-blue">Escobar</span>
              </h1>
              <div className="subheading mb-5">
                Ingeniero Informático · Desarrollador · Santiago De Chile ·
                <a className="text-cyan" href={"mailto:" + info.correo}>
                  {info.correo}
                </a>
              </div>
              <p className="lead mb-5">{info.intro}</p>
              <div className="social-icons">
                {info.socials.map((item) => {
                  return (
                    <a
                      className={`social-icon ` + item.nombre}
                      href={item.link}
                    >
                      <FontAwesomeIcon icon={["fab", item.nombre]} />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Experience*/}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experiencia</h2>
              {info.experiencia.map((item) => {
                return (
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">{item.cargo}</h3>
                      <div className="subheading mb-3">
                        <a href={item.link}>{item.empresa}</a>
                      </div>
                      <p>{item.descripcion}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">{item.fecha}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <hr className="m-0" />
          {/* Education*/}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Educacion</h2>
              {info.educacion.map((item) => {
                return (
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">
                        <a href="http://www.duoc.cl/">{item.lugar}</a>
                      </h3>
                      <div className="subheading mb-3">{item.titulo}</div>
                      <div>{item.descripcion}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">{item.fecha}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <hr className="m-0" />
          {/* Skills*/}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Habilidades</h2>
              <div className="subheading mb-3">Front End</div>
              <ul className="list-inline dev-icons">
                {info.habilidades.front.map((item) => {
                  return (
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={["fab", item]} />
                    </li>
                  );
                })}
              </ul>
              <div className="subheading mb-3">Back End</div>
              <ul className="list-inline dev-icons">
                {info.habilidades.back.map((item) => {
                  return (
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={["fab", item]} />
                    </li>
                  );
                })}
              </ul>
              <div className="subheading mb-3">Versionamiento</div>
              <ul className="list-inline dev-icons">
                {info.habilidades.versionamiento.map((item) => {
                  return (
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={["fab", item]} />
                    </li>
                  );
                })}
              </ul>
              <div className="subheading mb-3">Extras</div>
              <ul className="list-inline dev-icons">
                {info.habilidades.extras.map((item) => {
                  return (
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={["fab", item]} />
                    </li>
                  );
                })}
              </ul>
              {/* <div class="subheading mb-3">Skills</div>
              <ul class="fa-ul mb-0">
                <li>
                  <span class="fa-li">
                    <i class="fas fa-check"></i>
                  </span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span class="fa-li">
                    <i class="fas fa-check"></i>
                  </span>
                  Cross Functional Teams
                </li>
              </ul> */}
            </div>
          </section>
          <hr className="m-0" />
          {/* Proyectos*/}
          <section className="resume-section" id="projects">
            <div className="resume-section-content">
              <h2 className="mb-5">Proyectos</h2>
              <div className="subheading mb-3">Proyectos realizados</div>
              {/* CARDS DE PROYECTOS */}
              <div
                className="card text-white bg-dark mb-3 d-inline-block"
                style={{ maxWidth: "20rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Imgs%2FSrc%2FscreenshotGood.png?alt=media&token=615de56d-bc54-4127-bccf-a4ace68a48eb"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title text-light">
                    Administrador de Pacientes
                  </h4>
                  <p className="card-text">
                    Creador de citas para clinica veterinaria, con
                    almacenamiento de estas en Local Storage
                    <br /> Realizado Con React
                  </p>
                  <a
                    href="https://citasveterinarias.netlify.app/"
                    className="btn btn-custom"
                  >
                    Veamoslo!
                  </a>
                </div>
              </div>
              <div
                className="card text-white bg-dark mb-3 d-inline-block"
                style={{ maxWidth: "20rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Imgs%2FSrc%2Fscreenshot2Good.png?alt=media&token=b7b5cf5d-1b37-4097-92de-a64057fe2e83"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title text-light">
                    Cotizador de Prestamos
                  </h4>
                  <p className="card-text">
                    Cotizador de prestamos, en base a un interes fijado por
                    codigo segun cantidad y tiempo
                    <br /> Realizado Con React
                  </p>
                  <a
                    href="https://cotizadorprestamoschescobar.netlify.app/"
                    className="btn btn-custom"
                  >
                    Veamoslo!
                  </a>
                </div>
              </div>
              {/* END CARDS DE PROYECTOS */}
            </div>
          </section>
          {/* END CARDS DE PROYECTOS */}
          <hr className="m-0" />
          {/* Interests*/}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Intereses</h2>
              <p>
                Me gusta mucho el mundo de la tecnologia, me gusta mucho
                aprender sobre cosas nuevas, generalmente siempre ando viendo
                videos, haciendo cursos, o leyendo algun articulo sobre las
                nuevas tecnologias de desarrollo, frameworks, lenguajes,etc.
                <br /> Actualmente estoy haciendo cursos para mejorar en JS y
                aprender React JS.
              </p>
              <p className="mb-0">
                Ademas de todo eso, soy muy fan de los videojuegos, ver series,
                anime, peliculas, etc.
                <br /> Tambien hago algo de deporte, si tengo tiempo libre me
                gusta mucho andar en bicicleta siento que es muy bueno para
                despejarse al sentir el viento chocando en la cara, por otra
                parte a veces juego futbolito si bien no soy el mejor me
                entretengo mucho jajaja.
              </p>
              <br />
              <div className="d-flex justify-content-center">
                <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                    <i className="fas fa-laptop" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-gamepad" />
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-laugh-wink" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-bicycle" />
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-futbol" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Awards*/}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Cursos y Certificaciones</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <a
                    className="cursos"
                    href="#"
                    data-toggle="modal"
                    data-target="#ModalAnalytics"
                  >
                    <span className="fa-li">
                      <i className="far fa-chart-bar text-red" />
                    </span>
                    Google Analytics For Beginners
                  </a>
                </li>
                <li>
                  <a
                    className="cursos"
                    href="#"
                    data-toggle="modal"
                    data-target="#ModalDevelop"
                  >
                    <span className="fa-li">
                      <i className="fab fa-google text-yellow" />
                    </span>
                    Introduccion Al Desarrollo Web II{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursos"
                    href="#"
                    data-toggle="modal"
                    data-target="#ModalGit"
                  >
                    <span className="fa-li">
                      <i className="fas fa-code-branch text-orange" />
                    </span>
                    Fundamentos Git Y Github
                  </a>
                </li>
                <li>
                  <a
                    className="cursos"
                    href="#"
                    data-toggle="modal"
                    data-target="#ModalPug"
                  >
                    <span className="fa-li">
                      <i className="fas fa-dog text-green" />
                    </span>
                    Pug Desde Cero
                  </a>
                </li>
                <li>
                  <a
                    className="cursos"
                    href="#"
                    data-toggle="modal"
                    data-target="#ModalKanban"
                  >
                    <span className="fa-li">
                      <i className="fab fa-trello text-purple" />
                    </span>
                    Kanban Comprendelo Facilmente
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* END Awards*/}
          <hr className="m-0" />
          {/*Ebooks*/}
          <section className="resume-section" id="ebook">
            <div className="resume-section-content">
              <h2 className="mb-5">Ebooks</h2>
              <div className="subheading mb-3">Ebooks Realizados</div>
              <div
                className="card text-white bg-dark mb-3 d-inline-block"
                style={{ maxWidth: "20rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Imgs%2FPortadaGitlab.png?alt=media&token=38a98452-67c4-4907-ade6-341c03cbc5ec"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title text-light">How To Use Gitlab</h4>
                  <p className="card-text">
                    Manual como utizar Gitlab en ambientes de trabajo en
                    equipos.
                    <br /> Ramas, Push, Merge Request...
                  </p>
                  <a
                    data-toggle="modal"
                    data-target="#ModalEbook"
                    className="btn btn-custom"
                  >
                    Leamoslo
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* MODALES PARA Certificaciones */}
          <div
            className="modal"
            id="ModalAnalytics"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion Certificado
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Certificados%2Fgoogleanalytics.jpg?alt=media&token=7e76b3c4-f52d-4ac4-bff0-375f9aa1b39f"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="ModalDevelop"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion Certificado
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Certificados%2Fgoogle.jpg?alt=media&token=7428c400-4fa2-4d88-8ded-6d1aa78850b8"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="ModalGit"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion Certificado
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Certificados%2Fcertificado_git.jpg?alt=media&token=fb1e4ee4-d3db-4208-8aa1-b2cd7e3d31df"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="ModalPug"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion Certificado
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Certificados%2Fpug.jpg?alt=media&token=a6159305-9114-462e-8ea7-bcc9be808163"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="ModalKanban"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion Certificado
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Certificados%2Fkanban.jpg?alt=media&token=321d6fbb-c0e1-4bd5-a23c-fdf71dac8759"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="ModalEbook"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Previsualizacion E-Book
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    src="https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Ebooks%2FGitlab.pdf?alt=media&token=bf55af45-de0f-4fef-a18d-56deccc5bc9d"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*END MODALES PARA Certificaciones */}
        </div>
      </div>
    );
  }
}

export default All;
