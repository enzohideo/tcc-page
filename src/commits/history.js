import history from "./azalea-history.json" with { type: "json" };
import inject from "../lib/inject";

const monthOrder = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
].reverse();

export default () => {
  const history_per_month = Object.groupBy(history, ({ date }) =>
    date.slice(4, 7),
  );

  let history_html = "";

  for (const month of monthOrder) {
    if (!(month in history_per_month)) {
      continue;
    }

    const commits = history_per_month[month]
      .map(
        (log) => `
          <b>${log.commit.slice(0, 7)}:</b>
          ${log.message}
          [
            <span style="color: green;">+${log.stats.insertions}</span>
            <span style="color:red;">-${log.stats.deletions}</span>
          ]
          <div style="color: gray; padding-bottom: 10px;">
            ${log.stats.file_stats
              .map(
                (stat) => `
                <div>
                  └ ${stat.name}
                  ${
                    stat.lines_changed > 0
                      ? `<span style="color: orange">~${stat.lines_changed}</span>`
                      : ""
                  }
                </div>
              `,
              )
              .join("")}
          </div>
        `,
      )
      .join("");

    history_html = `${history_html}
      <h3 id="commits-${month}">${month}</h3>
      <div style="font-size: 0.75em;">
        ${commits}
      </div>
    `;
  }

  inject("#azalea-history", history_html);
};
