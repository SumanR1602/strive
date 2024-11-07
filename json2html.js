export default function json2html(data) {
    const headers = ["Name", "Age", "Gender"];
    const table = `
      <table data-user="suman160204@gmail.com">
        <thead>
          <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>
              ${headers.map(header => `<td>${row[header] || ""}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    return table;
  }
  