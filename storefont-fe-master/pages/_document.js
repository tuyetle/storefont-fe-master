import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import AppIcons from '~/components/App/Icons';

// const prod = false;
// process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  // renderCSS() {
  //   const obj = {...this.props, css:null, ids: null, rules: null, html: null};
  //   console.dir(obj);
  //   return prod ?
  //   (<link rel="stylesheet" href="/static/css/crit.min.css" />) : (<link rel="stylesheet" href="/static/css/bundle.css" />);
  // }

  /* eslint react/no-danger: 0 */
  render() {
    return (
      <html lang="vi">
        <Head>
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="expires" content="10800" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          {AppIcons()}
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&amp;subset=vietnamese" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i&amp;subset=vietnamese" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <style type="text/css" data-glamor-ssr dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body className="body">
          <div className="root"><Main /></div>
          <NextScript />
        </body>
        <link rel="stylesheet" href="/static/css/bundle.min.css" />
      </html>
    );
  }
}
