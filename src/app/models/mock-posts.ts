import { Post } from './post';

export const MockedPosts: Post[] = [
    {
        id: 10,
        title: 'Sample blog post',
        dateUpdated: new Date('10/29/2017'),
        datePublished: new Date('10/29/2017'),
        userName: 'admin',
        tags: ['Angular', 'JavaScript', 'TypeScript'],
        imageUrl: "https://i.imgur.com/17AZsIo.png",
        isPublished: true,
        commentsCount: 4,
        excerpt: `This blog post shows a few different types of content that's supported and styled with Bootstrap.
        `,
        content: `<p><img alt="" src="https://i.imgur.com/rQ2T5fM.png" style="height:366px; width:650px" /></p>
        <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
        <hr>
        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <h2>Heading</h2>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <h3>Sub-heading</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <pre><code>Example code block</code></pre>
        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
        <h3>Sub-heading</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        </ol>
        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
        `
    }, {
        id: 11,
        title: 'Another blog post',
        dateUpdated: new Date('01/01/2017'),
        datePublished: new Date('10/29/2017'),
        userName: 'Mark Siman',
        tags: ['Angular', 'JavaScript'],
        isPublished: true,
        commentsCount: 0,
        imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*6iZRxm29jTTDu1z91fo0iA.jpeg',
        excerpt: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        `,
        content: `<p><img alt="" src="https://cdn-images-1.medium.com/max/2000/1*i0qclSPNcjj8cWOPr3wLxg.png" style="height:415px; width:900px" /></p>        
        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`
    },
    {
        id: 12,
        title: 'New Feature',
        dateUpdated: new Date('12/01/2016'),
        datePublished: new Date('10/28/2017'),
        userName: 'Chris Mayer',
        tags: ['JavaScript', 'TypeScript'],
        isPublished: true,
        commentsCount: 0,
        imageUrl: 'https://dz2cdn3.dzone.com/storage/rc-covers/1266030-rxjs-cover.png',
        excerpt: `Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
        `,
        content: `<p><img alt="" src="https://www.mactech.ml/wp-content/uploads/2017/04/javascript-js-ss-1920-800x445.jpg" style="height:445px; width:800px" /></p>
        
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        `
    },
    {
        id: 13,
        title: 'Sample blog post',
        dateUpdated: new Date('04/09/2017'),
        datePublished: new Date('03/09/2017'),
        userName: 'Mark Zuckerberg',
        tags: ['React'],
        isPublished: true,
        commentsCount: 0,
        imageUrl: "https://lh3.googleusercontent.com/-ndZJOGgvYQ4/WM1ZI8dH86I/AAAAAAAADeo/l67ZqZnRUO8QXIQi38bEXuxqHfVX0TV2gCJoC/w424-h318-n-rw/thumbnail8.jpg",
        excerpt: `This blog post shows a few different types of content that's supported and styled with Bootstrap.
        `,
        content: `<p><img alt="" src="https://www.mactech.ml/wp-content/uploads/2017/04/javascript-js-ss-1920-800x445.jpg" style="height:445px; width:800px" /></p>
        
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        `
    },
    {
        id: 14,
        title: 'Sample blog post',
        dateUpdated: new Date('04/09/2017'),
        datePublished: null,
        userName: 'admin',
        isPublished: false,
        commentsCount: 0,
        tags: ['Angular', 'JavaScript', 'TypeScript'],
        imageUrl: "https://lh3.googleusercontent.com/-ojLI116-Mxk/WM1ZIwdnuwI/AAAAAAAADeo/4K6VpwIPSfgsmlXJB5o0N8scuI3iW4OpwCJoC/w424-h318-n-rw/thumbnail6.jpg",
        excerpt: `This blog post shows a few different types of content that's supported and styled with Bootstrap.
        `,
        content: `<p><img alt="" src="https://www.mactech.ml/wp-content/uploads/2017/04/javascript-js-ss-1920-800x445.jpg" style="height:445px; width:800px" /></p>
        
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        `
    },
    {
        id: 15,
        title: 'Sample blog post',
        dateUpdated: new Date('04/09/2017'),
        datePublished: new Date('06/09/2017'),
        userName: 'admin',
        tags: ['Zone.js'],
        isPublished: true,
        commentsCount: 0,
        imageUrl: "https://lh3.googleusercontent.com/-TrK1csbtHRs/WM1ZI1SIUNI/AAAAAAAADeo/OkiUjuad6skWl9ugxbiIA_436OwsWKBNgCJoC/w424-h318-n-rw/thumbnail3.jpg",
        excerpt: `This blog post shows a few different types of content that's supported and styled with Bootstrap.
        `,
        content: `<p><img alt="" src="https://www.mactech.ml/wp-content/uploads/2017/04/javascript-js-ss-1920-800x445.jpg" style="height:445px; width:800px" /></p>
        
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        `
    },
    {
        id: 16,
        title: 'Sample blog post',
        dateUpdated: new Date('04/09/2017'),
        datePublished: new Date('05/09/2017'),
        userName: 'Mark Zuckerberg',
        tags: ['RxJs'],
        isPublished: true,
        commentsCount: 1,
        imageUrl: "https://lh3.googleusercontent.com/-UKfIhJSBW9M/WM1ZI8ou34I/AAAAAAAADeo/vlLGY29147AYLaxUW29ZXJlun115BhkhgCJoC/w424-h318-n-rw/thumbnail7.jpg",
        excerpt: `This blog post shows a few different types of content that's supported and styled with Bootstrap.
        `,
        content: `<p><img alt="" src="https://www.mactech.ml/wp-content/uploads/2017/04/javascript-js-ss-1920-800x445.jpg" style="height:445px; width:800px" /></p>
        
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        `
    },

];