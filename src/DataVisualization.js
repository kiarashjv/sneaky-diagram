import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./DataVisualization.css";

const DataVisualization = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", 800)
      .attr("height", 500)
      .style("background-color", "#f0f0f0")
      .style("margin", "20px")
      .style("padding", "10px");

    // Clear previous content
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.flow))
      .range([0, width])
      .padding(0.1);

    const x1 = d3
      .scaleBand()
      .domain(data.length > 0 ? data[0].tasks.map((d) => d.task) : [])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => d3.max(d.tasks, (task) => task.duration)),
      ])
      .nice()
      .range([height, 0]);

    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    g.append("g").attr("class", "y-axis").call(d3.axisLeft(y));

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("padding", "5px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    const flow = g
      .selectAll(".flow")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "flow")
      .attr("transform", (d) => `translate(${x0(d.flow)},0)`);

    flow
      .selectAll("rect")
      .data((d) => d.tasks)
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.task))
      .attr("y", (d) => y(d.duration))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => height - y(d.duration))
      .attr("fill", "steelblue")
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`Task: ${d.task}<br>Duration: ${d.duration} hours`)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
      });

    g.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text("Flow");

    g.append("text")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .attr("transform", "rotate(-90)")
      .text("Duration (hours)");
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default DataVisualization;
