import React from 'react';
import {Link} from 'react-router-dom';

const Course = ({courses}) => {
    return (
        <section className="terms-items">
            <header>
                <h2> آخرین دوره های تاپ لرن </h2>
                <Link to="/archive"> مشاهده همه دوره ها </Link>
            </header>
            <div className="row">
                {courses.map((course =>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col" key={course._id}>
                    <article>
                        <Link to={`/course/${course._id}`} className="img-layer">
                            <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} width="180px" height="180px" />
                        </Link>
                        <h2>
                            <Link to={`/course/${course._id}`}>
                                {course.title}
                            </Link>
                        </h2>
                        <span> {course.price} </span>
                        <i>1:52:32</i>
                    </article>
                </div>
                ))}


            </div>
        </section>
    );
}

export default Course;