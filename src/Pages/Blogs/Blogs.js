import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  // Dynamic Title
  useTitle('Blogs')

  return (
    <div className="mt-24 mb-8 text-center w-4/5 mx-auto bg-slate-300 rounded-3xl p-5">
      {/* First Question Answer */}
      <div tabIndex={0} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            &#9827; There are five practical differences between SQL and NoSQL:{" "}
            <br />
            &#9827; SQL is the programming language used to interface with
            relational databases. (Relational databases model data as records in
            rows and tables with logical links between them). NoSQL is a class
            of DBMs that are non-relational and generally do not use SQL.
          </p>

          <p>
            {" "}
            &#9827; <span className="font-semibold text-xl">
              Language:-
            </span>{" "}
            SQL has been around for over 40 years, so it is recognizable,
            documented, and widely-used. Safe and versatile, it’s particularly
            well suited for complex queries. However, SQL restricts the user to
            working within a predefined tabular schema, and more care must be
            taken to organize and understand the data before it is used.
          </p>

          <p>
            {" "}
            &#9827; <span className="font-semibold text-xl">
              Scalability:-
            </span>{" "}
            Most SQL databases can be scaled vertically, by increasing the
            processing power of existing hardware. NoSQL databases use a
            master-slave architecture which scales better horizontally, with
            additional servers or nodes.
          </p>

          <p>
            {" "}
            &#9827; <span className="font-semibold text-xl">
              Structure:-
            </span>{" "}
            SQL database schemata always represent relational, tabular data,
            with rules about consistency and integrity. They contain tables with
            columns (attributes) and rows (records), and keys have constrained
            logical relationships.
          </p>
        </div>
      </div>
      {/* Second Question Answer */}
      <div tabIndex={1} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            &#9827; JSON Web Token (JWT) is an open standard (RFC 7519) for
            securely transmitting information between parties as JSON object.{" "}
            <br />
            &#9827; The purpose of using JWT is not to hide data but to ensure
            the authenticity of the data. JWT is signed and encoded, not
            encrypted. <br />
            &#9827; JWT is a token based stateless authentication mechanism.
            Since it is a client-side based stateless session, server doesn't
            have to completely rely on a datastore(database) to save session
            information. <br />
            &#9827; Basically the identity provider(IdP) generates a JWT
            certifying user identity and Resource server decodes and verifies
            the authenticity of the token using secret salt / public key.
          </p>
        </div>
      </div>
      {/* Third Question Answer */}
      <div tabIndex={2} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            &#9827; JavaScript is a simple programming language that can be used
            with any browser that has the JavaScript Engine installed. Node.js,
            on the other hand, is an interpreter or execution environment for
            the JavaScript programming language. It requires libraries that can
            be conveniently accessed from JavaScript programming to be more
            helpful. <br />
            &#9827; JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. <br />
            &#9827; Any engine may run JavaScript. As a result, writing
            JavaScript is incredibly easy, and any working environment is
            similar to a complete browser. Node.js, on the other hand, only
            enables the V8 engine. Written JavaScript code, on the other hand,
            can run in any context, regardless of whether the V8 engine is
            supported. <br />
            &#9827; A specific non-blocking operation is required to access any
            operating system. There are a few essential objects in JavaScript,
            but they are entirely OS-specific. Node.js, on the other hand, can
            now operate non-blocking software tasks out of any JavaScript
            programming. It contains no OS-specific constants. Node.js
            establishes a strong relationship with the system files, allowing
            companies to read and write to the hard drive. <br />
            &#9827; The critical benefits of JavaScript include a wide choice of
            interfaces and interactions and just the proper amount of server
            contact and direct visitor input. Node.js, on the other hand, offers
            node package management with over 500 modules and the capacity to
            handle many requests at the same time. It also offers the unique
            ability to enable microservice architecture and the Internet of
            Things. Even when comparing node js vs. react js, node js always
            wins.{" "}
          </p>
        </div>
      </div>
      {/* fourth Question Answer */}
      <div tabIndex={3} className="collapse group my-3 rounded-3xl">
        <div className="collapse-title bg-slate-500 text-primary-content group-focus:bg-secondary group-focus:text-secondary-content font-bold">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            &#9827; We know NodeJS application is single-threaded. Say, if
            processing involves request A that takes 10 seconds, it does not
            mean that a request which comes after this request needs to wait 10
            seconds to start processing because NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded. <br />
            &#9827; NodeJS receives multiple client requests and places them
            into EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. <br />
            &#9827; If NodeJS can process the request without I/O blocking then
            the event loop would itself process the request and sends the
            response back to the client by itself. But, it is possible to
            process multiple requests parallelly using the NodeJS cluster module
            or worker_threads module. <br />
            &#9827; A single instance of Node.js runs in a single thread. If you
            have a multi-core system then you can utilize every core. Sometimes
            developer wants to launch a cluster of NodeJS process to take
            advantage of the multi-core system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
