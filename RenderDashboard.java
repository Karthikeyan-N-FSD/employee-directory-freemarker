import freemarker.template.*;
import java.util.*;
import java.io.*;

public class RenderDashboard {
    public static void main(String[] args) throws Exception {
        // Get current working directory
        String baseDir = System.getProperty("user.dir");
        String templateDir = baseDir + File.separator + "src" + File.separator + "templates";
        String dashboardHtml = baseDir + File.separator + "src" + File.separator + "dashboard.html";
        String addEmployeeHtml = baseDir + File.separator + "src" + File.separator + "add-employee.html";

        // Configure Freemarker
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_32);
        cfg.setDirectoryForTemplateLoading(new File(templateDir));
        cfg.setDefaultEncoding("UTF-8");

        // Data model (empty, since <#assign> is used in template)
        Map<String, Object> dataModel = new HashMap<>();

        // Render dashboard.ftl
        Template dashboardTemplate = cfg.getTemplate("dashboard.ftl");
        Writer dashboardOut = new FileWriter(dashboardHtml);
        dashboardTemplate.process(dataModel, dashboardOut);
        dashboardOut.close();

        // Render add-employee.ftl
        Template addEmployeeTemplate = cfg.getTemplate("add-employee.ftl");
        Writer addEmployeeOut = new FileWriter(addEmployeeHtml);
        addEmployeeTemplate.process(dataModel, addEmployeeOut);
        addEmployeeOut.close();

        System.out.println("✅ dashboard.html and add-employee.html have been generated in src/");
    }
}