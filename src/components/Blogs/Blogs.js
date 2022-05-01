import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blog-item-container">
      <h1 className="mb-4">Blogs</h1>
      <div>
        <h4>What is the difference between JS and Node.js?</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">JS</th>
              <th scope="col">Node.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                JS is a programming language which use to write script on a
                website.
              </td>
              <td>
                Node.js is a runtime environment for JS which give access to run
                JS in server site.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>JS easily can add HTML and can access DOM.</td>
              <td>Node.js cannot do this.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                We can run JS in any browser engine like spidermonkey, JS core
                etc.
              </td>
              <td>We can run Node.js in JS engine called V8 engine.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>JS is mainly use to develop front end/client side.</td>
              <td>Node.js mainly use to develop back end/server side.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Popular JS frameworks are TypedJS, RamdaJS etc.</td>
              <td>Popular Node.js modules are Express, Lodash etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>When should you use node.js and when should you use mongodb?</h4>
        <p>
          Node.js: <br /> First of all Node.js is a JS library. So there is a
          huge benefit who has a good knowledge about JS He/She can easily learn
          Node.js. It's improve the speed and performance of an app for using
          JS. Node.js is an open source project. <br />
          <br />
          Mongodb: <br />
          As a document database, MongoDB makes it easy for developers to store
          structured or unstructured data. It uses a JSON-like format to store
          documents. This format directly maps to native objects in most modern
          programming languages, making it a natural choice for developers, as
          they don’t need to think about normalizing data. MongoDB can also
          handle high volume and can scale both vertically or horizontally to
          accommodate large data loads.
        </p>
      </div>
      <div>
        <h4>What is the difference between sql and nosql?</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">SQL</th>
              <th scope="col">NOSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                SQL databases are primarily called as Relational Databases
                (RDBMS).
              </td>
              <td>
                NoSQL database are primarily called as non-relational/
                distributed database.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                SQL databases defines as structured query language. SQL requires
                to use predefined schemas to determine the structure of data
                before work with it. Also all data must follow the same
                structure.
              </td>
              <td>
                A NoSQL database has dynamic schema for unstructured data. Data
                is stored in many ways which means it can be document-oriented,
                column-oriented, graph-based or organized as a KeyValue store.
                This flexibility means that documents can be created without
                having defined structure first. Also each document can have its
                own unique structure.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                SQL databases are vertically scalable. This means that you can
                increase the load on a single server by increasing things like
                RAM, CPU or SSD.
              </td>
              <td>
                NoSQL databases are horizontally scalable. This means that you
                handle more traffic by sharding, or adding more servers in your
                NoSQL database. It is similar to adding more floors to the same
                building versus adding more buildings to the neighborhood.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                SQL databases are table-based. This makes relational SQL
                databases a better option for applications that require
                multi-row transactions such as an accounting system or for
                legacy systems that were built for a relational structure.
              </td>
              <td>
                NoSQL databases are either key-value pairs, document-based,
                graph databases or wide-column stores.
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                SQL databases follow ACID properties (Atomicity, Consistency,
                Isolation and Durability).
              </td>
              <td>
                NoSQL database follows the Brewers CAP theorem (Consistency,
                Availability and Partition tolerance).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
