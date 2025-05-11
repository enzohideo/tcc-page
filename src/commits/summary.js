import raw_summary from "./azalea-summary.json" with { type: "json" };
import history from "./azalea-history.json" with { type: "json" };
import inject from "../lib/inject";

class Summary {
  constructor(summary) {
    this.header = structuredClone(summary.header);
    this.sum = structuredClone(summary.SUM);
    delete summary.SUM;
    delete summary.header;
    this.languages = summary;
  }
}

export default () => {
  const summary = new Summary(raw_summary);

  const header_html = `
    <div>
      commits: ${history.length}, files: ${summary.header.n_files}, lines: ${summary.header.n_lines}
    </div>
  `;

  const table_html = `
    <table>
      <tbody>
        <tr>
          <th>Language</th>
          <th>Files</th>
          <th>Blank</th>
          <th>Comment</th>
          <th>Code</th>
        <tr>
        ${Object.entries(summary.languages)
          .map(
            ([lang, row]) => `
          <tr>
            <td>${lang}</td>
            <td>${row.nFiles}</td>
            <td>${row.blank}</td>
            <td>${row.comment}</td>
            <td>${row.code}</td>
          <tr>
        `,
          )
          .join("")}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${summary.sum.nFiles}</td>
          <td>${summary.sum.blank}</td>
          <td>${summary.sum.comment}</td>
          <td>${summary.sum.code}</td>
        <tr>
      </tfoot>
    </table>
  `;

  const html = `${header_html}${table_html}`;

  inject("#azalea-summary", html);
};
