import React, { useLayoutEffect } from "react"
import * as am5 from "@amcharts/amcharts5"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy"
import { data } from "./data"

export default function Skills() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv")

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)])

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        //layout: root.verticalLayout
      })
    )

    // Add title
    let title = container.children.push(
      am5.Label.new(root, {
        text: "Technologies",
        textAlign: "center",
        x: am5.p50,
        y: am5.p50,
        centerX: am5.p50,
        centerY: am5.p50,
        fontSize: 25,
        fontWeight: "500",
        fill: am5.color(0x385d63),
      })
    )

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    let series = container.children.push(
      am5hierarchy.Sunburst.new(root, {
        singleBranchOnly: true,
        downDepth: 2,
        initialDepth: 2,
        topDepth: 1,
        innerRadius: 100,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
      })
    )

    series.nodes.template.setAll({
      tooltipText: "{category}",
    })

    series.slices.template.setAll({
      templateField: "nodeSettings",
    })

    series.labels.template.setAll({
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      baseRadius: am5.p100,
      centerX: am5.p100,
      textAlign: "start",
    })

    // Set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data

    series.data.setAll(data)
    series.set("selectedDataItem", series.dataItems[0])

    // Make stuff animate on load
    series.appear(1000, 100)

    return () => {
      root.dispose()
    }
  }, [])

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
}
